import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header Section */}
      <div className="relative bg-purple-700 h-48 rounded-b-3xl shadow-lg max-w-4xl mx-auto">
        <div className="absolute -bottom-16 left-8">
          <div className="relative">
            <img 
              src={`https://d1wh1xji6f82aw.cloudfront.net/${user.Avatar}`} 
              alt={user.FullName}
              className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-xl transition-transform duration-300 hover:scale-105"
            />
            {user.Role && (
              <span className="absolute bottom-0 right-0 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {user.Role.Title}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 pt-24 pb-8 max-w-4xl mx-auto">
        {/* User Info Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-purple-900 mb-1">{user.FullName}</h1>
          <p className="text-purple-600 mb-4">{user.Username}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div>
                <p className="text-sm text-purple-500">Email</p>
                <p className="text-purple-900">{user.Email}</p>
                {!user.EmailConfirmed && (
                  <span className="text-xs text-red-500">(Not verified)</span>
                )}
              </div>
              
              {user.GiftingCountry && (
                <div>
                  <p className="text-sm text-purple-500">Gifting Country</p>
                  <p className="text-purple-900">{user.GiftingCountry.Name}</p>
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              {user.Role && (
                <div>
                  <p className="text-sm text-purple-500">Role</p>
                  <p className="text-purple-900">{user.Role.Title}</p>
                  {user.SuperAdmin && (
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded">Super Admin</span>
                  )}
                </div>
              )}
              
              <div>
                <p className="text-sm text-purple-500">Account Status</p>
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${user.IsBlocked ? 'bg-red-500' : 'bg-green-500'}`}></span>
                  <p className="text-purple-900">{user.IsBlocked ? 'Blocked' : 'Active'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Admin Privileges Section */}
        {user.Role && user.Role.Title === "Admin" && (
          <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-bold text-purple-900 mb-4">Admin Privileges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {user.Role.CanAddMaterial && (
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-purple-800 font-medium">Add Materials</p>
                </div>
              )}
              {user.Role.CanUpdateMaterial && (
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-purple-800 font-medium">Update Materials</p>
                </div>
              )}
              {user.Role.CanChangeStatusBoard && (
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-purple-800 font-medium">Change Status</p>
                </div>
              )}
              {user.Role.CanSendNotification && (
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-purple-800 font-medium">Send Notifications</p>
                </div>
              )}
              {user.Role.CanUpdatePromoCodes && (
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-purple-800 font-medium">Manage Promo Codes</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Profile Completion Section */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-purple-900 mb-4">Profile Completion</h2>
          <div className="mb-2">
            <div className="flex justify-between text-sm text-purple-700 mb-1">
              <span>Completed</span>
              <span>{user.ProfileCompletePercent}%</span>
            </div>
            <div className="w-full bg-purple-100 rounded-full h-2.5">
              <div 
                className="bg-purple-600 h-2.5 rounded-full" 
                style={{ width: `${user.ProfileCompletePercent}%` }}
              ></div>
            </div>
          </div>
          <div className="text-sm text-purple-700">
            {user.ProfileCompletePercent < 50 ? (
              <p>Your profile needs more information. Complete it to unlock all features.</p>
            ) : user.ProfileCompletePercent < 80 ? (
              <p>Good progress! Just a few more details to complete your profile.</p>
            ) : (
              <p>Great job! Your profile is almost complete.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;